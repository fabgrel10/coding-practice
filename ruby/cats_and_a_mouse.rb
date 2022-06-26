# Two cats and a mouse
# Source: hackerrank
# Url: https://www.hackerrank.com/challenges/cats-and-a-mouse

def cat_and_mouse(x, y, z)
  cat_a = (x - z).abs
  cat_b = (y - z).abs
  return 'Cat A' if cat_b > cat_a
  return 'Cat B' if cat_a > cat_b

  'Mouse C'
end
