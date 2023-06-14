import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid #d3d3d3;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
    height: 90%;

    & h6 {
        font-size: 2.5rem;
    }
`;

export const Container = styled.div`
    box-sizing: border-box;
    border: 1px solid #d3d3d3;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    text-align: center;
    font-size: 1.15rem;
    padding: 0 1.5rem;
    padding-bottom: 1rem;
`;

export const Figure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const Image = styled.img`
    width: 45%;
    height: auto;
    filter: drop-shadow(0.4rem 0.5rem 0 rgba(0, 0, 0, 0.95));

`
export const Type = styled.span<{ color: string }>`
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 1.24rem;
    margin: 0.25rem 0.5rem;
    background-color: ${props => props.color};
    color: white;
`

export const Caption = styled.figcaption`
    text-align: center;
`;

export const Habilities = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 0.5rem;
    column-gap: 0.5rem;
    margin: 0.5rem 0;

    font-size: 1.25rem;

    p {
        margin: 0;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        border: 1px solid #d3d3d3;
    }
`;