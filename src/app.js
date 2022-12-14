const app = {
  overlap: function(line1, line2) {
  l1 = [line1[0], line1[0] + line1[1]]
  l2 = [line2[0], line2[0] + line2[1]]
  
  if (l1[1] > l2[0] && l2[1] > l1[1] && l1[0] < l2[0]){
    // overlap with l1[0] being the smallest val, l2[1] being the largest val
    return [l2[0],l2[1]-l1[1]]
  }
  else if (l2[1] > l1[0] && l1[1] > l2[1] && l2[0] < l1[0]){
    // overlap with l2[0] being the smallest val, l1[1] being the largest val
    return [l1[0],l1[1]-l2[1]]
  }
  else if (l1[0] < l2[0] && l1[1] > l2[1]){
    // overlap with l1 fully inside the range of l2
    return line2
  }
  else if (l2[0] < l1[0] && l2[1] > l1[1]) {
    // overlap with l2 fully inside the range of l1
    return line1
  }
  else{
    // no overlap
    return null
  }
  }
}
module.exports = app