(function () {
    CustomRenderer = function (name) {
        CustomRenderer.superClass_.constructor.call(this, name);
    }
    Blockly.utils.object.inherits(CustomRenderer, Blockly.blockRendering.Renderer);

    CustomRenderer.prototype.makeConstants_ = function () {
        return new CustomConstantsProvider();
    }
    Blockly.blockRendering.register('custom_renderer', CustomRenderer);

    CustomConstantsProvider = function () {
        CustomConstantsProvider.superClass_.constructor.call(this);
        this.NOTCH_WIDTH = 20;
        // The height of the notch used for previous and next connections.
        this.NOTCH_HEIGHT = 6;
        // Rounded corner radius.
        this.CORNER_RADIUS = 2;
        // The height of the puzzle tab used for input and output connections.
        this.TAB_HEIGHT = 20;
        this.TAB_WIDTH = 0;
        this.JAGGED_TEETH_HEIGHT = 0;
        this.JAGGED_TEETH_WIDTH = 0;

        this.STATEMENT_INPUT_NOTCH_OFFSET = 20;
        this.NOTCH_OFFSET_LEFT = 15;
        this.STATEMENT_INPUT_PADDING_LEFT = 35;
        this.MIN_BLOCK_HEIGHT = 16;
        this.MIN_BLOCK_WIDTH = 100;
        this.FIELD_BORDER_RECT_X_PADDING = 3;
        this.FIELD_BORDER_RECT_Y_PADDING = 5;
        this.FIELD_BORDER_RECT_COLOUR = "#F5F9FF";
        this.EMPTY_INLINE_INPUT_PADDING = 17;
        this.EMPTY_INLINE_INPUT_HEIGHT = 25;
        this.EMPTY_STATEMENT_INPUT_HEIGHT = 27;
        this.FIELD_DROPDOWN_COLOURED_DIV = true;
        this.START_HAT_WIDTH = 100;
    }
    Blockly.utils.object.inherits(CustomConstantsProvider, Blockly.blockRendering.ConstantProvider);

    CustomConstantsProvider.prototype.init = function () {
        CustomConstantsProvider.superClass_.init.call(this);
        this.NOTCH = this.makeNotch();
        this.PUZZLE_TAB = this.makePuzzleTab();
        this.RECT_PREV_NEXT = this.makeRectangularPreviousConn();
        this.RECT_INPUT_OUTPUT = this.makeRectangularInputConn();
        this.ADD_START_HATS = true;
    }

    CustomConstantsProvider.prototype.shapeFor = function (connection) {
        var checks = connection.getCheck();
        switch (connection.type) {
            case Blockly.INPUT_VALUE:
            case Blockly.OUTPUT_VALUE:
                // Includes doesn't work in IE.
                if (checks && checks.indexOf('Number') != -1) {
                    return this.RECT_INPUT_OUTPUT;
                }
                if (checks && checks.indexOf('String') != -1) {
                    return this.RECT_INPUT_OUTPUT;
                }
                return this.PUZZLE_TAB;
            case Blockly.PREVIOUS_STATEMENT:
            case Blockly.NEXT_STATEMENT:
                return this.NOTCH;
            default:
                throw Error('Unknown type');
        }
    }

    CustomConstantsProvider.prototype.makeRectangularPreviousConn = function () {
        var width = this.NOTCH_WIDTH;
        var height = this.NOTCH_HEIGHT;

        /**
         * Since previous and next connections share the same shape
         * you can define a function to generate the path for both.
         */
        function makeMainPath(dir) {
            return Blockly.utils.svgPaths.line(
                [
                    Blockly.utils.svgPaths.point(0, height),
                    Blockly.utils.svgPaths.point(dir * width, 0),
                    Blockly.utils.svgPaths.point(0, -height)
                ])
        }
        var pathLeft = makeMainPath(1);
        var pathRight = makeMainPath(-1);

        return {
            width: width,
            height: height,
            pathLeft: pathLeft,
            pathRight: pathRight
        };
    };

    CustomConstantsProvider.prototype.makeRectangularInputConn = function () {
        var width = this.TAB_WIDTH;
        var height = this.TAB_HEIGHT;

        /**
         * Since input and output connections share the same shape you can
         * define a function to generate the path for both.
         */
        function makeMainPath(up) {
            return Blockly.utils.svgPaths.line(
                [
                    Blockly.utils.svgPaths.point(-width, 0),
                    Blockly.utils.svgPaths.point(0, -1 * up * height),
                    Blockly.utils.svgPaths.point(width, 0)
                ]);
        }

        var pathUp = makeMainPath(1);
        var pathDown = makeMainPath(-1);

        return {
            width: width,
            height: height,
            pathDown: pathDown,
            pathUp: pathUp
        };
    };
    CustomConstantsProvider.prototype.makeNotch = function () {
        const width = this.NOTCH_WIDTH;
        const height = this.NOTCH_HEIGHT;
        const innerWidth = 10;
        const outerWidth = (width - innerWidth) / 2;

        function makeMainPath(dir) {
            return Blockly.utils.svgPaths.line([
                Blockly.utils.svgPaths.point(dir * outerWidth, height),
                Blockly.utils.svgPaths.point(dir * innerWidth, 0),
                Blockly.utils.svgPaths.point(dir * outerWidth, -height)
            ])
        }

        const pathLeft = makeMainPath(1);
        const pathRight = makeMainPath(-1);

        return {
            type: this.SHAPES.NOTCH,
            width,
            height,
            pathLeft,
            pathRight
        }
    }
}())