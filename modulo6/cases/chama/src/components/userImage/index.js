import { ContainerImage, ComtainerImageBox } from "./styled"

export const UserImage = (props) => {
    return (
        <ContainerImage>
            <ComtainerImageBox src={props.url} alt={props.text}>

            </ComtainerImageBox>

        </ContainerImage>
    )
}