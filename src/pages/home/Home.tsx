import { Announcement, Categories, Navbar, Slider } from '../../components';

const Home = (): JSX.Element => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </>
  );
};

export default Home;
