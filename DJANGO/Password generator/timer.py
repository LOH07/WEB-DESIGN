import os,time

m = int(input("enter minutes:\n"))
s = int(input("enter seconds from 1 to 59:\n"))

while m > 0 and s > 0:
 if s == 0:
     m -= 1
 else:
     continue
 print(f"{m} : {s}")
 time.sleep(1)
 os.system('clear')
 s -= 1
print("time has ended!")
