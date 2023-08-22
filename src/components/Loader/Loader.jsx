import { Dna } from 'react-loader-spinner'
import {DnaWrap} from './Loader.styled'

const Loader = () => {
    return (
    <DnaWrap>
        <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"            
            />
    </DnaWrap>
    )
}

export default Loader;