import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    & > * {
        box-sizing: border-box;
    }
`;

export const StatBar = styled.div<{ width: string, color: string }>`
    width: 205px;
    height: 0.5rem;
    background-color: #d3d3d3;
    border-radius: 0.25rem;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 0.25rem;
        background-color: ${props => props.color};
        width: ${props => props.width};
    }
`;

export const StatGraph = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;

    p {
        text-align: left;
        margin: 0.15rem 0;

        & sub {
            font-size: 0.65rem;
            font-weight: 100;
        }
    }
`;

export const Title = styled.h2`
`;

export const StatContainer = styled.div`
`;