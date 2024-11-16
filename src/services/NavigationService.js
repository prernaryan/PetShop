import {
  CommonActions,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';

let _navigator;

export function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

export function navigate(routeName, params) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}

export function reset(routeName, params) {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: routeName, params: params}],
  });

  _navigator.dispatch(resetAction);
}

export function push(routeName, params) {
  _navigator.dispatch(StackActions.push(routeName, params));
}

export function popToTop() {
  _navigator.dispatch(StackActions.popToTop());
}

export function goBack() {
  _navigator.dispatch(CommonActions.goBack());
}

export function replace(routeName, params) {
  _navigator.dispatch(StackActions.replace(routeName, params));
}

export function resetAndNavigate(routeName, params) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [CommonActions.navigate({name: routeName, params: params})],
  });

  _navigator.dispatch(resetAction);
}
// New function to open the drawer
export function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}
export function closeDrawer() {
  _navigator.dispatch(DrawerActions.closeDrawer());
}
