import Calculator from '../../components/calculator/model';

class Controller {
    constructor($scope){
        $scope.calculator = new Calculator();

        $scope.setNumber = (num) => {
            $scope.calculator.setNumber(num);
        }

        $scope.setComma = () => {
            $scope.calculator.setComma();
        }

        $scope.setOperator = (operator) => {
            $scope.calculator.setOperator(operator);
        }

        $scope.setResult = () => {
            $scope.calculator.setResult();
        }

        $scope.clear = () => {
            $scope.calculator.clear();
        }
    }
}

export default Controller;
