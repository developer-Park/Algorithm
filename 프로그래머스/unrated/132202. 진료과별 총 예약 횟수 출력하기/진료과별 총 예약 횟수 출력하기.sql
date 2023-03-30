-- 코드를 입력하세요
SELECT MCDP_CD as "진료과코드", count(MCDP_CD) as"5월예약건수" 
from APPOINTMENT 
where APNT_YMD >= '2022-05-01' and APNT_YMD <= '2022-05-31'
Group by MCDP_CD
ORDER BY COUNT(MCDP_CD) ASC, MCDP_CD ASC
