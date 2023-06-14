import { Container, StatBar, StatGraph, Title, StatContainer } from './Stats.styled'

interface Props {
    stats: Stats
}


function Stats({ stats }: Props) {

    function statPercentage(value: number): string {
        return `${((value / 255) * 100).toFixed(2)}%`;
    }

    const calculateTotalStats = stats.hp + stats.attack + stats.defense + stats.specialAttack + stats.specialDefense + stats.speed;


    return (
        <Container>
            <Title>Total Base Stats: {calculateTotalStats}</Title>
            <StatContainer>
                <StatGraph>
                    <p>HP<sub>{stats.hp}</sub></p>
                    <StatBar color=" #78C850" width={statPercentage(stats.hp)} />
                </StatGraph>
                <StatGraph>
                    <p>Attack<sub>{stats.attack}</sub></p>
                    <StatBar color="#F08030" width={statPercentage(stats.attack)} />
                </StatGraph>
                <StatGraph>
                    <p>Defense<sub>{stats.defense}</sub></p>
                    <StatBar color="#6890F0" width={statPercentage(stats.defense)} />
                </StatGraph>
                <StatGraph>
                    <p>Sp.Attack<sub>{stats.specialAttack}</sub></p>
                    <StatBar color="#A040A0" width={statPercentage(stats.specialAttack)} />
                </StatGraph>
                <StatGraph>
                    <p>Sp.Defense<sub>{stats.specialDefense}</sub></p>
                    <StatBar color="#F85888" width={statPercentage(stats.specialDefense)} />
                </StatGraph>
                <StatGraph>
                    <p>Speed<sub>{stats.speed}</sub></p>
                    <StatBar color="#F8D030" width={statPercentage(stats.speed)} />
                </StatGraph>
            </StatContainer>
        </Container>
    )
}

export default Stats;
