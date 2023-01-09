import styled from "styled-components";
import CountryList from "../../components/CountryList";
import { getCountry, getCountryByName } from "../../helpers/apis";
import { ICountryDataTypes, ICountryTypes } from "../../types/countryTypes";

const CountryPage = ({ country }: { country: ICountryTypes }) => {
  return (
    <Wrap>
      <CountryList country={country} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
`;

export const getStaticProps = async (context: any) => {
  const { data }: ICountryDataTypes = await getCountryByName(
    context.params.countryId
  );
  return {
    props: {
      country: data,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const name = await getCountry();
  const paths = name.map(item => ({
    params: { countryId: item.alpha3Code.toLocaleLowerCase() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export default CountryPage;
