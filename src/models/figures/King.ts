import { Figure, FigureNames } from './Figure'
import { Colors } from '../Color'
import { Cell } from './../Cell'

import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }

        if (target.figure?.name === FigureNames.KING && target.figure?.color) {
            console.log(target)
        }

        const isVerticalMove =
            (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) &&
            target.x === this.cell.x

        const isHorizontalMove =
            (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
            target.y === this.cell.y

        const isLeftDiagonal =
            (target.x === this.cell.x + 1 && target.y === this.cell.y + 1) ||
            (target.x === this.cell.x - 1 && target.y === this.cell.y - 1)

        const isRightDiagonal =
            (target.x === this.cell.x + 1 && target.y === this.cell.y - 1) ||
            (target.x === this.cell.x - 1 && target.y === this.cell.y + 1)

        if (
            isVerticalMove ||
            isHorizontalMove ||
            isLeftDiagonal ||
            isRightDiagonal
        ) {
            return true
        }

        return false
    }
}
