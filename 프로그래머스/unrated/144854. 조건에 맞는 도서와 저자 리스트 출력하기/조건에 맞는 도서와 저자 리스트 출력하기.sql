-- 코드를 입력하세요
SELECT b.BOOK_ID, a.AUTHOR_NAME, date_format(B.PUBLISHED_DATE,'%Y-%m-%d') as PUBLISHED_DATE FROM BOOK b 
Left join AUTHOR a
on b.AUTHOR_ID = a.AUTHOR_ID
where b.category = '경제'
order by PUBLISHED_DATE