import JavaScript from "./JavaScript";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./add";

function Assignment3() {
  return (
    <div>
      <h2>Assignment 3</h2>
      <Classes />
      <JavaScript />
      <ConditionalOutput />
      <Styles />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <Add a={3} b={4} />
    </div>
  );
}

export default Assignment3;
