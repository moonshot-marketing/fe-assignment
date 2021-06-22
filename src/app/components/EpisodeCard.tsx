import {Avatar, Card, Col, Row, Skeleton, Space, Typography} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import styled from 'styled-components';
import {useGetEpisodeById} from "../gql/episodes";
import {Episode} from "../types";

const {Text, Title} = Typography;

export interface EpisodeCardProps {
    episodeId: string;
    onDelete: (episodeId: string) => void;
}

type EpisodeCardContentProps = Episode;

const StyledSpace = styled(Space)`
  width: 100%;
`;

const EpisodeCardContent = (props: EpisodeCardContentProps) => {
    const {name, air_date, episode, created, characters} = props;

    return (
        <StyledSpace direction={"vertical"} size={"large"}>
            <Row>
                <Col span={8}>
                    <Avatar size="large" src={characters.length && characters[0].image}/>
                </Col>
                <Col span={12}>
                    <Title level={3}>{name}</Title>
                    <Text>{episode}</Text>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Text>Created: {created}</Text>
                </Col>
                <Col span={12}>
                    <Text>Air Date: {air_date}</Text>
                </Col>
            </Row>
        </StyledSpace>
    )
}

export const EpisodeCard = ({episodeId, onDelete}: EpisodeCardProps) => {
    const {data, loading} = useGetEpisodeById(episodeId);

    if (!data?.episodes.length && !loading) {
        return <>No Results</>;
    }

    const episode = data?.episodes[0];

    return (
        <Card
            loading={loading}
            title={loading || !episode ? <Skeleton title={false} paragraph={{rows: 1}}/> : `${episode.name}`}
            style={{width: 350, marginTop: 16}}
            actions={[
                <DeleteOutlined key="delete" onClick={() => episode && onDelete(episode.id)}/>,
            ]}
        >
            {episode && <EpisodeCardContent {...episode}/>}
        </Card>
    );
}
