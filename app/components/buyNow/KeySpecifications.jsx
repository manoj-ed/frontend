const KeySpecifications = ({ data }) => {
  const specLabels = {
    operating_weight: "Operating Wt",
    engine_power: "Engine Power",
    drive_type: "Drive Type",
    bucket_capacity: "Bucket Capacity (Front)",
    dipper_bucket_capacity: "Dipper/Bucket Capacity (Back)",
    blade_type: "Blade Type",
    transmission_type: "Transmission Type",
    rated_operating_capacity: "Rated Operating Capacity",
    track_type: "Track Type",
    blade_width: "Blade Width",
    trencher_type: "Trencher Type",
    trenching_depth: "Trenching Depth",
    trenching_width: "Trenching Width",
    scraper_type: "Scraper Type",
    capacity: "Capacity",
    attachments: "Attachments",
    attachment_included: "Attachments",
    fuel_type: "Fuel Type",
    phase_type: "Phase Type",
    power_output_kva: "Power Output Kva",
    type: "Type",
    mixture_type: "Mixture Type",
    mounting_type_mobility: "Mounting Type Mobility",
    output_capacity_per_hour: "Output Capacity Per Hour",
    power_source: "Power Source",
    batch_capacity_m3: "Batch Capacity M3",
    boom_reach: "Boom Reach",
    chassis_type: "Chassis Type",
    horizontal_reach: "Horizontal Reach",
    hours_of_operation: "Hours Of Operation",
    max_pumping_capacity: "Max Pumping Capacity",
    pump_type: "Pump type",
    pumping_pressure: "Pumping Pressure",
    vertical_pumping_height: "Vertical Pumping Height",
    boom_length: "Boom Length",
    boom_sections: "Boom Sections",
    folding_type: "Folding Type",
    mount_type: "Mount Type",
    output_capacity: "Output Capacity",
    pipeline_diameter: "Pipeline Diameter",
    vertical_reach: "Vertical Reach",
    control_type: "Control Type",
    application_area: "Application Area",
    needle_diameter: "needle Diameter",
    vibration_frequency: "Vibration Frequency",
    vibrator_type: "Vibrator Type",
    control_system: "Control System",
    material_compatibility: "Material compatibility",
    maximum_horizontal_conveying_distance:
      "Maximum Horizontal Conveying Distance",
    maximum_vertical_conveying_distance: "Maximum vertical Conveying Distance",
    pump_output_capacity: "Pump Output Capacity",
    shotcrete_type: "Shotcrete Type",
    certifications: "Certifications",
    finish_type: "Finish Type",
    grade_of_concrete: "Grade Of Concrete",
    load_bearing: "Load Bearing",
    manufacturing_method: "Manufacturing Method",
    product_type: "Product Type",
    reinforcement_type: "Rreinforcement Type",
    lift_height : "Lift Height",
    lifting_capacity : "Lifting Capacity",
    mast_type : "Mast Type",
    tire_type : "Tire Type",
    boom_lift_type : "Boom Lift Type",
    lift_capacity : "Lift Capacity",
    mobility_type : "Mobility Type",
    platform_height : "Platform Height",
    mounting_type : "Mounting Type",
    speed_control : "Speed Control",
    platform_type : "Platform Type",
    
  };

  return (
    <div className="text-lg font-semibold">
      <div className="mb-2 text-gray-800">Key Specification</div>

      <div className="flex flex-wrap bg-white rounded-xl shadow-sm border border-gray-200 p-1">
        {Object.entries(specLabels).map(([key, label]) => {
          const value =
            data[key] ||
            (key === "attachment_included" ? data.attachments : null);

          if (!value) return null;

          return (
            <div
              key={key}
              className="w-1/2 pl-2 p-1 leading-[1] group relative overflow-hidden transition-colors duration-200 hover:bg-gray-100 rounded-sm"
            >
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>

              <span className="text-xs font-semibold text-gray-700 group-hover:text-orange-500">
                {label}:
              </span>
              <span className="pl-1 text-xs font-normal text-gray-600 group-hover:text-orange-500">
                {value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeySpecifications;
