import { type FormEvent, useState } from "react";
import { CheckCircle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import HeroBanner from "@/components/shared/HeroBanner";
import { services } from "@/data/services";

const whyChoose = [
  "Immediate to same-day response",
  "Real-time GPS tracking",
  "Temperature-controlled transport",
  "Hazmat-certified drivers",
  "Chain-of-custody documentation",
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    pickupLocation: "",
    deliveryLocation: "",
    packageDescription: "",
    weight: "",
    dimensions: "",
    notes: "",
  });

  const [specialRequirements, setSpecialRequirements] = useState({
    temperatureControl: false,
    hazmat: false,
    signatureRequired: false,
    insurance: false,
    weekendDelivery: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (key: keyof typeof specialRequirements) => {
    setSpecialRequirements((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", { ...formData, specialRequirements });
  };

  return (
    <>
      {/* ─── Hero ─── */}
      <HeroBanner title="Request a Quote" subtitle="GET STARTED TODAY" />

      {/* ─── Main Content ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* ── Left: Quote Form (2 cols) ── */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">
                    Get Your Custom Quote
                  </CardTitle>
                  <CardDescription>
                    Tell us about your shipment and we will provide a tailored
                    quote within one business hour.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-10">
                    {/* ── Contact Information ── */}
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-dark mb-4">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Company name"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* ── Shipment Details ── */}
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-dark mb-4">
                        Shipment Details
                      </h3>
                      <div className="space-y-4">
                        {/* Service Type */}
                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Type</Label>
                          <Select
                            value={formData.serviceType}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                serviceType: value,
                              }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.title} ({service.responseTime})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="pickupLocation">
                              Pickup Location
                            </Label>
                            <Input
                              id="pickupLocation"
                              name="pickupLocation"
                              placeholder="Address or facility name"
                              value={formData.pickupLocation}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="deliveryLocation">
                              Delivery Location
                            </Label>
                            <Input
                              id="deliveryLocation"
                              name="deliveryLocation"
                              placeholder="Address or facility name"
                              value={formData.deliveryLocation}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="packageDescription">
                            Package Description
                          </Label>
                          <Textarea
                            id="packageDescription"
                            name="packageDescription"
                            placeholder="Describe the contents, handling requirements, etc."
                            rows={3}
                            value={formData.packageDescription}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="weight">Weight (lbs)</Label>
                            <Input
                              id="weight"
                              name="weight"
                              placeholder="e.g., 25"
                              value={formData.weight}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dimensions">
                              Dimensions (L x W x H)
                            </Label>
                            <Input
                              id="dimensions"
                              name="dimensions"
                              placeholder='e.g., 12" x 10" x 8"'
                              value={formData.dimensions}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* ── Special Requirements ── */}
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-dark mb-4">
                        Special Requirements
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(
                          [
                            ["temperatureControl", "Temperature Control"],
                            ["hazmat", "Hazmat / Dangerous Goods"],
                            ["signatureRequired", "Signature Required"],
                            ["insurance", "Insurance"],
                            ["weekendDelivery", "Weekend Delivery"],
                          ] as const
                        ).map(([key, label]) => (
                          <div key={key} className="flex items-center gap-3">
                            <Checkbox
                              id={key}
                              checked={specialRequirements[key]}
                              onCheckedChange={() => handleCheckbox(key)}
                            />
                            <Label htmlFor={key} className="cursor-pointer">
                              {label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* ── Additional Notes ── */}
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-dark mb-4">
                        Additional Notes
                      </h3>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Any other details or special instructions..."
                        rows={4}
                        value={formData.notes}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="bg-secondary hover:bg-secondary/90 text-white w-full text-lg py-6"
                    >
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* ── Right Sidebar (1 col) ── */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading">
                    Why Choose JPT USA?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {whyChoose.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                        <span className="text-dark text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Need Help */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading">
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-dark font-medium text-sm">
                        (718) 525-4888
                      </p>
                      <p className="text-dark font-medium text-sm">
                        (347) 303-0507
                      </p>
                    </div>
                  </div>
                  <p className="text-gray text-sm">24/7 Dispatch Available</p>
                </CardContent>
              </Card>

              {/* Service Area */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading">
                    Service Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-dark text-sm font-medium">
                        NYC Tri-State Region
                      </p>
                      <p className="text-gray text-sm mt-1">
                        All 5 NYC boroughs, Northern New Jersey, Southern
                        Connecticut, and all major airports (JFK, EWR, LGA).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
