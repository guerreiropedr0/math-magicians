export default (condition, then, otherwise) => (condition ? then : otherwise);
// prevent nested ternary linter error;
