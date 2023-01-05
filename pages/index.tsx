import axios from "axios";
import styled from "styled-components";

export default function Home(props: any) {
  // console.log(props.data.slice(0, 100));
  return <Wrap>ggggg</Wrap>;
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;

// export const getStaticProps = async () => {
//   try {
//     const response = await axios.get("https://restcountries.com/v2/all");
//     const { data }: any = response;
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// };
