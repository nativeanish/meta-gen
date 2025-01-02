import { MetaGeneratorOptions } from "./types/interfaces";
import { isValidInput } from "./utils/validators";
import { generateBasicMeta } from "./generators/basic-meta";
import { generateOpenGraph } from "./generators/open-graph";
import { generateTwitter } from "./generators/twitter";

function metagen(options: MetaGeneratorOptions): string[] {
  if (!isValidInput(options)) {
    console.error(
      "No data was added into the meta-generator! Provide an object with supported arguments"
    );
    return [];
  }

  const tags: string[] = [
    ...generateBasicMeta(options),
    ...generateOpenGraph(options),
    ...generateTwitter(options),
  ];

  return options.minified ? [tags.join("")] : tags;
}

export default metagen;
