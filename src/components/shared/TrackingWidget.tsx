import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TrackingWidgetProps {
  compact?: boolean;
}

export default function TrackingWidget({ compact = false }: TrackingWidgetProps) {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/tracking?id=${encodeURIComponent(trackingNumber.trim())}`);
    }
  };

  const form = (
    <form
      onSubmit={handleSubmit}
      className={cn("flex", compact ? "flex-row gap-2" : "flex-col sm:flex-row gap-3")}
    >
      <Input
        type="text"
        placeholder="Enter tracking number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" className="bg-primary hover:bg-primary-light text-white">
        Track
      </Button>
    </form>
  );

  if (compact) {
    return form;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Track Your Shipment</CardTitle>
      </CardHeader>
      <CardContent>{form}</CardContent>
    </Card>
  );
}
