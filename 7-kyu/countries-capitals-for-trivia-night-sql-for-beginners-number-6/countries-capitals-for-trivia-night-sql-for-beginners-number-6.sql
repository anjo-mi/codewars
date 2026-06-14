 
SELECT capital
FROM countries
WHERE (continent = 'Africa' OR continent = 'Afrika')
      AND LEFT(country,1) = 'E'
ORDER BY capital ASC
LIMIT 3;