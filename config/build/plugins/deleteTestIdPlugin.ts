import { PluginItem } from "@babel/core";

export default function deleteTestIdPlugin():PluginItem {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name
          .split("")
          .reverse()
          .join("");
      },
    },
  };
}