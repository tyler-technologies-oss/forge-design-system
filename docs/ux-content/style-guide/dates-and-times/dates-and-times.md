# Dates and times

## Commas in dates

When a phrase lists only a month and a year, do not separate the year with commas. When a phrase refers to a month, day and year, set off the year with commas.  
If you’re writing the date in **day-month-year format,** you don’t need a comma.

<Columns columns="two" type="equal" denseSpacing={true}>
  <div>
    <DoDontGrid titleText="Do">
      <DoDontTextSection>
        <DoDontText type="do">January 2016 was a cold month.</DoDontText>
        <DoDontText type="do">January 2nd, 2016 was a cold day. </DoDontText>
        <DoDontText type="do">1 January 2016 was a warm day. </DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>

  <div>
    <DoDontGrid titleText="Don't">
      <DoDontTextSection>
        <DoDontText type="dont">January, 2016 was a cold month. </DoDontText>
        <DoDontText type="dont">January, 2nd, 2016 was a cold day. </DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>
</Columns>

---

## Dashes in date ranges

To connect ranges, use an en dash `&ndash;` with no spaces on either side.

<Columns columns="two" type="equal" denseSpacing={true}>
  <div>
    <DoDontGrid titleText="Do">
      <DoDontTextSection>
        <DoDontText type="do">July 12–16, January–March</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>

  <div>
    <DoDontGrid titleText="Don't">
      <DoDontTextSection>
        <DoDontText type="dont">July 12 – 16, January – March</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>
</Columns>

---

## Date abbreviations

Use the following abbreviation when writing out durations of time. Don’t use a period after the abbreviation.  

* **Time durations:** hrs, min, sec 
* **Time zones:** EST, CST, MST 
* **Days of the week:** Mon, Tue, Wed, Thu, Fri, Sat, Sun 
* **Month:** Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec 

---

## Date ranges

- Include only the minimum necessary information in order to keep date and time ranges short and clear.
- If the date range is in the same year (month), don’t repeat the year (month).
- Use a single AM or PM at the end of the range, if both times have the same AM/PM.
- To connect ranges use an en dash `&ndash;` with no spaces on either side.

| Type                  | Non-numeric                                             | Numeric
| :---------------------| :-------------------------------------------------------| :----------------
| Same month            | Apr 3–24, 2019                                          | 4/3–24/2019
| Same year             | Apr 3–Aug 17, 2019                                      | 04/23–8/17/2018
| Different years       | Apr 23, 2018–Jun 24, 2019                               |   04/23/2018–06/24/2019
| With time (12 hour)   | Jun 23, 2018 10:30 AM–Jun 24, 2019 01:15 PM             | 06/23/2018 10:30 AM–06/24/2018 01:15 PM
| With time (24 hour)   | Jun 23, 2018 10:30–Jun 24, 2019 13:15                   | 06/23/2018 10:30–06/24/2018 13:15
| With day of the week  | Tue, Jun 23, 2018 10:30 AM–Thu, Jun 24, 2018 01:15 PM   | Tue, 06/23/2018 10:30 AM–Thu, 06/24/2018 01:15 PM

---

## Dates and times 

Forge recommends writing out dates whenever possible. Not only are written dates more clear, but they also translate better into other languages. For example, Feb 10, 2019 in Spanish is written as 10 de febrero (10/02/2019); portraying 02/10/2019 can be ambiguous depending on language of the user. 

Only use numeric formats for dates if there is a compelling reason (such as a lack of space in a table). 

| Type                                    | Non-numeric                                        | Numeric
| :---------------------------------------| :--------------------------------------------------| :----------------
| Time                                    | n/a                                                | 04:15 PM
| 24-hour time                            | n/a                                                | 14:00
| Time range                              | n/a                                                | 9:00 AM–3:00 PM; 10:00–11:30 AM
| Date, month, and year                   | Mar 3, 2019, December 15, 2019                     | 03/03/2019
| Day of week, date, month, and year      | Tue, Nov 7, 2019; Tuesday, January 6, 2019         | Tuesday, 11/07/2019; Tues, 01/06/2019
| With time (12 hour)                     | Mar 3, 2019 3:35 PM; March 3, 2019 3:35 PM         | 03/03/2019 3:35 PM
| With time (24 hour)                     | Mar 3, 2019 13:35 PM; March 3, 2019 13:35 PM       | 03/03/2019 13:35 PM
| Approximate time                        | In 5 minutes; 3 days ago                           | n/a
| Absolute time                           | Today, 10:00 AM                                    | n/a

---

## Best practices

  <div>
    <DoDontGrid titleText="Do">
      <DoDontTextSection>
        <DoDontText type="do">Whenever possible, display date and time information as people normally speak to each other, when space is available. This helps users understand what the date or time is for, such as: <b>“Store open 9:00 AM–Midnight”</b> or <b>“Reminder for tomorrow afternoon.”</b></DoDontText>
        <DoDontText type="do">Refer to <b>“yesterday”</b> or <b>“tomorrow”</b> in those terms.</DoDontText>
        <DoDontText type="do">If the day is in the upcoming week, include the day of the week (such as Tuesday).</DoDontText>
      <DoDontText type="do">For times that have occurred today, use Today, <b>10:00 AM</b> instead of <b>10/03/2019 AM.</b></DoDontText>
        <DoDontText type="do">For times that have occurred in the past week or will occur in the next week, round to the approximate day: <b>3 days ago, in 5 days.</b></DoDontText>
        <DoDontText type="do">For times that have occurred (will occur) more than a week ago (in the future), use the formal date: Jan 12, 2019, 01/12/2019. Omit the time, unless necessary.</DoDontText>
        <DoDontText type="do">Use a numeric format for date picker inputs: 10/03/2019.</DoDontText>
        <DoDontText type="do">Capitalize <b>AM</b> and <b>PM</b>.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>

  <div>
    <DoDontGrid titleText="Don't">
      <DoDontTextSection>
        <DoDontText type="dont">Don't combine numeric and non numeric data formats: <b>Wed January 09/19.</b></DoDontText>
        <DoDontText type="dont">Don't use atypical abbreviations: <b>Weds Jan 09.</b></DoDontText>
        <DoDontText type="dont">Don't use hyphens in dates: <b>1-5-19.</b></DoDontText>
        <DoDontText type="dont">Try to avoid long or busy date ranges: <b>Tue, 06/23/2018 10:30 AM–Thu, 06/24/2018 01:15 PM PST.</b></DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>

---
