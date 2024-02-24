import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";
import House from "./json/House";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";

function JavaScript() {
  console.log("Hello, JavaScript!");
  return (
    <div>
      <h1>JavaScript</h1>
      <Spreading />
      <House />
      <JsonStringify />
      <MapFunction />
      <WorkingWithArrays />
      <ArrowFunctions />
      <ES5Functions />
      <ImpliedReturn />
      <FunctionParenthesisAndParameters />
      <IfElse />
      <TernaryOperator />
      <BooleanVariables />
      <VariableTypes />
      <ArrayIndexAndLength />
      <VariablesAndConstants />
    </div>
  );
}
export default JavaScript;
