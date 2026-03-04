import { type FormEvent, useState } from "react";
import { Phone, Clock, MapPin, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HeroBanner from "@/components/shared/HeroBanner";
import ContactInfoCard from "@/components/shared/ContactInfoCard";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Contact form submitted:", formData);
  };

  return (
    <>
      {/* ─── Hero ─── */}
      <HeroBanner title="Contact Us" subtitle="GET IN TOUCH" />

      {/* ─── Main Content ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* ── Left: Contact Form (3 cols) ── */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray text-sm mt-1">
                    Fill out the form below and our team will respond within one
                    business hour during dispatch hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
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

                    {/* Email */}
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

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, subject: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="quote">Service Quote</SelectItem>
                          <SelectItem value="tracking">Tracking Help</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your delivery needs..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="bg-secondary hover:bg-secondary/90 text-white w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* ── Right: Contact Info Cards (2 cols) ── */}
            <div className="lg:col-span-2 space-y-6">
              <ContactInfoCard
                icon={<Phone className="h-6 w-6 text-primary" />}
                title="Phone"
              >
                <p className="text-dark font-medium">(718) 525-4888</p>
                <p className="text-dark font-medium">(347) 303-0507</p>
                <p className="text-gray text-sm mt-1">
                  Call us anytime for immediate assistance
                </p>
              </ContactInfoCard>

              <ContactInfoCard
                icon={<Clock className="h-6 w-6 text-primary" />}
                title="Hours"
              >
                <p className="text-dark font-medium">24-Hour Dispatch</p>
                <p className="text-dark">7 Days a Week</p>
                <p className="text-gray text-sm mt-1">
                  Our dispatch team never sleeps
                </p>
              </ContactInfoCard>

              <ContactInfoCard
                icon={<MapPin className="h-6 w-6 text-primary" />}
                title="Service Area"
              >
                <p className="text-dark font-medium">NYC Tri-State Area</p>
                <p className="text-dark">All 5 Boroughs, NJ &amp; CT</p>
                <p className="text-gray text-sm mt-1">
                  Expanding to PA, IL, GA, and FL
                </p>
              </ContactInfoCard>

              <ContactInfoCard
                icon={<Plane className="h-6 w-6 text-primary" />}
                title="Airport Coverage"
              >
                <p className="text-dark font-medium">JFK, EWR, LGA</p>
                <p className="text-gray text-sm mt-1">
                  Direct pickup and delivery to all major NYC-area airports
                </p>
              </ContactInfoCard>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Map Section ─── */}
      <section className="bg-light py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold text-dark mb-8">
            Our Coverage Area
          </h2>
          <img
            src="/images/maps/usa-outline.svg"
            alt="Modal Global coverage area map"
            className="mx-auto max-w-full h-auto opacity-80"
          />
          <p className="text-gray text-sm mt-6">
            Headquartered in New York City with active service across the entire
            Tri-State region and expansion markets coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
