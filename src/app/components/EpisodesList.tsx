import {useAppDispatch, useAppSelector, remove, selectEpisodes} from "../store";
import {Card, Col, Empty, Row} from "antd";
import {EpisodeCard} from "./EpisodeCard";

export const EpisodesList = () => {
    const episodes = useAppSelector(selectEpisodes);
    const dispatch = useAppDispatch();

    const onDelete = (episodeId: string) => {
        dispatch(remove(episodeId));
    }

    return (
        <Card bordered={true}>
            {
                !episodes.length && <Empty/>
            }
            <Row>
                {
                    episodes?.map((episodeId, i) => (
                        <Col span={8} key={i} offset={2}>
                            <EpisodeCard episodeId={episodeId} onDelete={onDelete}/>
                        </Col>
                    ))
                }
            </Row>
        </Card>
    );
}
