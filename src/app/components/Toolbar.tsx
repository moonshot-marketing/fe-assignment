import styled from "styled-components";
import {Button, Col, Row} from "antd";
import {add} from "../store";
import {useAppDispatch} from "../store";


const StyledToolbar = styled(Row)`
  width: 100%;
  margin-bottom: 10px;
`

export const Toolbar = () => {
    const dispatch = useAppDispatch();

    const randomEpisodeId = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const onAddEpisode = () => {
        const episodeId = randomEpisodeId(1, 20).toString(10);
        dispatch(add(episodeId))
    }

    return (
        <StyledToolbar>
            <Col span={20}>
                <Button onClick={onAddEpisode}>Add Random Episode</Button>
            </Col>
        </StyledToolbar>
    );
}
