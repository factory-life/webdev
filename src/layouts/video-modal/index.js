import { Box, Button, Layer, Text } from 'grommet';
import { Close } from 'grommet-icons';
import ReactPlayer from 'react-player/lazy'

const VideoModal = ({ onClose, video }) => {
    return (
        <Layer full position='top'>
            <Box
                background='darkGrey'
                pad='small'
                direction='row'
                justify='center'
                align='center'
                fill
            >
                <ReactPlayer url={video.url} controls />
                <Button icon={<Close />} onClick={onClose} />
            </Box>
        </Layer>
    );
}

export default VideoModal;