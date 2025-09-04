
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


const TabsDropdown = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || "");
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (tabName, idx) => {
    const key = `${tabName}-${idx}`;
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <div>
      <section className="bg-white w-full rounded-lg shadow-sm p-4">
        {/* Tab headers */}
        <div className="flex w-full gap-5 border-b pb-2 mb-3 text-sm font-medium text-gray-600">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => {
                setActiveTab(tab.name);
                setOpenItem(null); // reset on tab change
              }}
              className={`pb-2 transition-all duration-200 ${
                activeTab === tab.name
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "hover:text-orange-500"
              }`}
            >
              {tab.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name} className="space-y-2">
                {tab.items.map((item, idx) => {
                  const key = `${tab.name}-${idx}`;
                  return (
                    <div key={key} className="border rounded-md overflow-hidden">
                      <button
                        onClick={() => toggleItem(tab.name, idx)}
                        className="flex justify-between items-center w-full px-3 py-2 text-left text-sm text-gray-800 hover:bg-orange-50"
                      >
                        {item.title}
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            openItem === key ? "rotate-180 text-orange-500" : ""
                          }`}
                        />
                      </button>
                      {openItem === key && (
                        <div className="px-3 py-2 text-xs text-gray-600 bg-white border-t">
                          {item.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )
        )}
      </section>
    </div>
  );
};

export default TabsDropdown;
