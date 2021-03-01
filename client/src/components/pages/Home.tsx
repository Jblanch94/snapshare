import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="h-screen">
      <section className="bg-hero bg-cover bg-no-repeat bg-left-center h-full flex flex-col justify-center items-center text-center">
        <div>
          <h1 className="text-white text-5xl font-bold">
            Share your experience.
          </h1>
          <p className="text-white text-2xl my-6 font-semibold max-w-xl">
            Join the snapshare community, home to hundreds of photos each
            sharing a different experience.
          </p>
        </div>
        <Link
          to="/sign-up"
          className="inline-block text-white border border-white p-4 text-2xl font-bold rounded-md transition duration-500 ease-in-out hover:bg-black hover:text-secondary mt-4">
          Sign up for free
        </Link>
      </section>
    </main>
  );
};

export default Home;
