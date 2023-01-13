-- 코드를 입력하세요
SELECT f.FLAVOR from first_half f
left join icecream_info i
on f.flavor = i.flavor 
where f.TOTAL_ORDER > 3000 and i.INGREDIENT_TYPE = 'fruit_based'
order by f.TOTAL_ORDER desc