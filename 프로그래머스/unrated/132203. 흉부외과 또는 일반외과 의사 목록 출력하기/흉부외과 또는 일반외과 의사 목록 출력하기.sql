-- 코드를 입력하세요
SELECT DR_NAME,DR_ID,MCDP_CD,DATE_FORMAT(HIRE_YMD,'%Y-%m-%d') from doctor where MCDP_CD ="CS" or MCDP_CD = "GS" order by HIRE_YMD desc , DR_NAME asc