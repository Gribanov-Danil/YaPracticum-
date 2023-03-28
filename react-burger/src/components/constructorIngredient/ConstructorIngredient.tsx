import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import panelStyles from "../constructorPanel/constructorPanel.module.css";
import {deleteDraggableIngredient} from "../../service/reducers/pickedIngredientsSlice";
import {useDispatch} from "react-redux";
import {memo} from "react";
import {Reorder} from "framer-motion";
import {TIngredientObj} from "../../utils/models/ingredient-types/types";

interface IConstructorIngredient {
    ingredientObj: TIngredientObj
}

// Элемент, имеющий днд
export const ConstructorIngredient = memo<IConstructorIngredient>(function ConstructorIngredient ({ingredientObj}) {
    const dispatch = useDispatch()
    const handleClose = () => dispatch(deleteDraggableIngredient(ingredientObj))

    return (
        <Reorder.Item value={ingredientObj} className={panelStyles.ingredient}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text={ingredientObj.ingredient.name}
                    price={ingredientObj.ingredient.price}
                    thumbnail={ingredientObj.ingredient.image}
                    handleClose={handleClose}
                />
        </Reorder.Item>
    )
})