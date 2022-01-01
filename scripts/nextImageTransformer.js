const path = require('path');

const root = path.resolve(process.cwd(), 'src');

/**
 * This transformer updates image imports to display the filepath and static
 * height/width so that tests don't crash and you can see with snapshots what
 * image is being used if that is useful.
 */
module.exports = {
  /**
   * @see {@link https://jestjs.io/docs/code-transformation#writing-custom-transformers}
   * @type {(sourceText: string, sourcePath: string, options: any) => string}
   */
  process(_sourceText, sourcePath) {
    return `module.exports = {
  src: "${sourcePath.replace(root, '')}",
  height: 100,
  width: 100,
};`;
  },
};
