import Head from 'next/head';
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  console.log("Received meetupData: " + JSON.stringify(props.meetupData));

  return (
    <>
    <Head>
        <title>Details of {props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
    </Head>
    <MeetupDetail
      id={props.meetupData.id}
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
    </>
  );
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  console.log("getStaticProps: connecting");
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PW}@${process.env.REACT_APP_DB_URL}${process.env.REACT_APP_DB_PARAMS}`
  );
  console.log("getStaticProps: connected. getting db");
  const db = client.db();
  console.log("getStaticProps: got DB, getting collection");
  const meetupsCollection = db.collection("meetups");

  const singleMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  console.log("getStaticProps: found item: " + singleMeetup);
  client.close();

  return {
    props: {
      meetupData: {
        id: singleMeetup["_id"].toString(),
        title: singleMeetup.title,
        address: singleMeetup.address,
        image: singleMeetup.image,
        description: singleMeetup.description,
      },
    },  
  };
}

//needed on dynamic pages with getStaticProps
export async function getStaticPaths() {
  console.log("getStaticPaths: connecting");
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PW}@${process.env.REACT_APP_DB_URL}${process.env.REACT_APP_DB_PARAMS}`
  );
  console.log("getStaticPaths: connected. getting db");
  const db = client.db();
  console.log("getStaticPaths: got DB, getting collection");
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  console.log("getStaticPaths: found items: " + meetups.length);

  client.close();

  return {
    paths: meetups.map((item) => {
      return { params: { meetupId: item["_id"].toString() } };
    }),
    // false: returns 404 on unspecified ids, 
    //true/blocking: renders dynamically, useful for preparing most used pages, but true shows empty page and 
    //then renders, and blocking pre renders and shows when done
    fallback: 'blocking', 
  };
}

export default MeetupDetails;
