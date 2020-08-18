export default function(state, action) {
  switch (action.type) {
    case 'setTab':
      return { ...state, tabIndex: action.payload }
    default:
      throw new Error('必须传入参数')
  }
}
