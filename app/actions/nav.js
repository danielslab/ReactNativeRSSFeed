export class types {
  static NAVIGATE = 'Navigation/NAVIGATE';
  static BACK = 'Navigation/BACK';
}

export function navigate(routeName, params) {
  return {
    type: types.NAVIGATE,
    routeName,
    params,
  };
}

export function goBack() {
  return {
    type: types.BACK,
  };
}
