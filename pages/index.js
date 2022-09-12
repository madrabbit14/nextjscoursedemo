import Head from "next/head";
import { MongoClient } from "mongodb"; //next js detects this import is used only server side and will not bundle it with client side code

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  //will receive props from staticprops
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta name="description" content="Training react app with next.js" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

//only works on components inside 'pages' folder
//can be async, next.js will wait before rendering the page
export async function getStaticProps() {
  //this code is executed during build, so it can become outdated

  //fetch data from an API
  //you could use fetch to retrieve data from your own API, but seems redundant

  //since this method is also never run client-side, you can use it to gather data without exposing backend.
  console.log("index.js getStaticProps: connecting");
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PW}@${process.env.REACT_APP_DB_URL}${process.env.REACT_APP_DB_PARAMS}`
  );
  console.log("index.js getStaticProps: connected. getting db");
  const db = client.db();
  console.log("index.js getStaticProps: got DB, getting collection");
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup["_id"].toString(),
      })),
    },
    revalidate: 5, //seconds
  }; //always need to return obj
}

/*
//not good in this case because the data is not changing frequently
export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;

    //this code only runs in server
    //fetch data from API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
};
*/
export default HomePage;
