import { CatalogList } from '../Catalog/CatalogList/CatalogList'
import {CampersFilter} from './CampersFilter/CampersFilter'

export const Catalog = () => {
    return (
        <>
            <CampersFilter/>
            <CatalogList/>
        </>
    )
}
