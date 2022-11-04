import {MoviesItem} from "./MoviesItem/MoviesItem";

export const MoviesList = ({moviesList}) => {
    return (
        <ul>
            {
                moviesList.map(item => <MoviesItem number={item} />)
            }
        </ul>
    )
}