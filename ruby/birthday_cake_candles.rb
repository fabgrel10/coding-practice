# Source: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

def birthday_cake_candles(candles)
  tallest = candles.max
  tallest_count = 0
  candles.each do |candle|
    tallest_count += 1 if candle >= tallest
  end
  tallest_count
end

birthday_cake_candles([3, 2, 1, 3])
