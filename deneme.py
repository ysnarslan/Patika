def EquivalentKeypresses(strArr):
  s1 = strArr[0]
  s2 = strArr[1]
  tmp = 0
  for i in range(len(s2)):
    if (s1[0] == s2[i]):
      for j in range (len(s1)):
        if (s1[j] != s2[i + j]):
            break
        elif (j == (len(s1) - 1)):
            return True
  return False

# keep this function call here 
print(EquivalentKeypresses(input()))


def DifferentCases(strParam):
  print(strParam.split("*", "-"))
  # code goes here
  return strParam.split("*", "-")

# keep this function call here 
print(DifferentCases(input()))



















  s1 = strArr[0]
  s2 = strArr[1]
  tmp = 0
  for i in range(len(s2)):
    if (s1[0] == s2[i]):
      for j in range (len(s1)):
        print(s1[j], " ", s2[i + j], " ", i + j, " ", j)
        if (s1[j] != s2[i + j]):
          break
        elif (j == (len(s1) - 1)):
          return True
  # code goes here
  return False




  def EquivalentKeypresses(strArr):
s1 = strArr[0]
s2 = strArr[1]
if (s1 == ""):
  return True
for i in range (len(s1)):
  for j in range (len(s2)):
    if (i == j):
      s2 = s2[j:]
      print(s2)

return True

# keep this function call here 
print(EquivalentKeypresses(input()))