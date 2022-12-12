const overlap = (line1, line2) => {
  /*
  case 1: they overlap with l1[0] being the smallest val, l2[1] being the largest val
  case 2: they overlap with l2[0] being the smallest val, l1[1] being the largest val
  case 3: they overlap with l1 fully inside the range of l2
  case 4: they overlap with l2 fully inside the range of l1
  case 5: they don't overlap
  */
  l1 = [line1[0], line1[0] + line1[1]]
  l2 = [line2[0], line2[0] + line2[1]]
  if (l1[1] > l2[0] && l2[1] > l1[1] && l1[0] < l2[0]){
    return [l2[0],l1[1]]
  }
  else if (l2[1] > l1[0] && l1[1] > l2[1] && l2[0] < l1[0]){
    return [l1[0], l2[1]]
  }
  else if (l1[0] < l2[0] && l1[1] > l2[1]){
    return l2
  }
  else if (l2[0] < l1[0] && l2[1] > l1[1]) {
    return l1
  }
  else{
    return null
  }
}

const line1 = [1,5] //1 through 6
const line2 = [3,1] //3 through 4
const ans = overlap(line1,line2)
console.log(ans)