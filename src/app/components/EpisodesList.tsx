import {useAppDispatch, useAppSelector, remove, selectEpisodes} from "../store";
import {Card, Col, Empty, Row} from "antd";
import {EpisodeCard} from "./EpisodeCard";

export const EpisodesList = () => {
    const episodes = useAppSelector(selectEpisodes);
    const dispatch = useAppDispatch();

    const onDelete = (episode: string) => {
        dispatch(remove(episode));
    }

    return (
        <Card bordered={true}>
            {
                !episodes.length && <Empty/>
            }
            <Row>
                {
                    episodes?.map((episode, i) => (
                        <Col span={8} key={i} offset={2}>
                            <EpisodeCard episodeId={episode} onDelete={onDelete}/>
                        </Col>
                    ))
                }
            </Row>
        </Card>
    );
}
