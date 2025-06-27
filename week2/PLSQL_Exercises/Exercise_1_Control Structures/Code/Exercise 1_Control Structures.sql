-- Scenario 1: Apply 1% Discount to Loan Interest for Customers Over Age 60
DO $$
DECLARE
    rec RECORD;
BEGIN
    FOR rec IN
        SELECT l.loanid
        FROM loans l
        JOIN customers c ON l.customerid = c.customerid
        WHERE date_part('year', age(c.dob)) > 60
    LOOP
        UPDATE loans
        SET interestrate = interestrate - 1
        WHERE loanid = rec.loanid;
    END LOOP;
END $$;

-- Scenario 2: Set IsVIP = TRUE for Customers with Balance > 10000
ALTER TABLE customers ADD COLUMN IF NOT EXISTS isvip BOOLEAN;

DO $$
DECLARE
    rec RECORD;
BEGIN
    FOR rec IN
        SELECT customerid FROM customers WHERE balance > 10000
    LOOP
        UPDATE customers
        SET isvip = TRUE
        WHERE customerid = rec.customerid;
    END LOOP;
END $$;
SELECT * FROM loans;
SELECT name, balance, isvip FROM customers;

-- Scenario 3: Print Reminder for Loans Due in Next 30 Days
DO $$
DECLARE
    rec RECORD;
BEGIN
    FOR rec IN
        SELECT c.name, l.enddate
        FROM loans l
        JOIN customers c ON l.customerid = c.customerid
        WHERE l.enddate BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days'
    LOOP
        RAISE NOTICE 'Reminder: Loan for customer % is due on %', rec.name, rec.enddate;
    END LOOP;
END $$;
SELECT loanid, customerid, enddate FROM loans;
UPDATE loans
SET enddate = CURRENT_DATE + INTERVAL '15 days'
WHERE loanid = 1;
COMMIT;


