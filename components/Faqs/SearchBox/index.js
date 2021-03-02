export default function SearchBox() {
  return (
    <form className="faqs-search-form" method="post" action="#">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="faq_search">
        Find topics by entering terms in the search box.
      </label>
      <div className="search-wrapper">
        <input
          type="search"
          id="faq_search"
          name="faq_search"
          placeholder="Search..."
        />
        <button type="submit" className="icon-search" />
      </div>
    </form>
  );
}
