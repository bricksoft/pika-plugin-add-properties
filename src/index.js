export function beforeBuild({ options }) {
  if (!options.properties) {
    return new MessageError(
      'option "properties" must be defined. Example: {"properties": {"foo":"bar"}} Or leave blank: {}'
    );
  }
}

export function manifest(newManifest, { options, cwd }) {
  const { properties } = options;

  for (const key in properties) {
    // merge values
    if (
      Array.isArray(newManifest[key]) ||
      typeof newManifest[key] === "object"
    ) {
      newManifest[key] = { ...newManifest[key], ...properties[key] };
    }
    // overwrite values
    else {
      newManifest[key] = properties[key];
    }
  }

  return newManifest;
}
