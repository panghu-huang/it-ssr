const actions = {};

export function addAction(name: string, action: any) {
  if (actions.hasOwnProperty(name)) {
    const type = typeof actions[name];
    if (type === typeof action && type === 'object') {
      actions[name] = { ...actions[name], ...action };
    } else {
      actions[name] = action;
    }
  } else {
    actions[name] = action;
  }
}

export default actions;