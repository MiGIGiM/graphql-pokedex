import ContentLoader from "react-content-loader"
import styled from "styled-components"

const Card = styled.div`
  width: 100%;
  height: 245.2px;
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
    margin: 0.15rem;
`;

function MyLoader() {
  return <Card>
    <ContentLoader 
    speed={2}
    width="100%"
    height={245.2}
    viewBox="0 0 183.6 245.2"
    backgroundColor="#cfcfcf"
    foregroundColor="#ecebeb"
  >
    <rect x="282" y="366" rx="0" ry="0" width="0" height="5" /> 
    <rect x="35" y="173" rx="0" ry="0" width="120" height="24" /> 
    <rect x="45" y="247" rx="0" ry="0" width="66" height="35" /> 
    <rect x="121" y="249" rx="0" ry="0" width="75" height="33" /> 
    <circle cx="89" cy="79" r="72" /> 
    <rect x="96" y="210" rx="0" ry="0" width="74" height="26" /> 
    <rect x="12" y="212" rx="0" ry="0" width="74" height="26" />
  </ContentLoader>
  </Card>
}

export default MyLoader
