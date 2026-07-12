interface Props {
  profile: {
    headline: string;
    connections: string;
    profileViews: string;
    recruiterSearches: string;
  };
}

export default function ProfileCard({ profile }: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8">
      <h3 className="mb-6 text-xl font-semibold">
        LinkedIn Profile
      </h3>

      <div className="space-y-4 text-slate-300">
        <p>
          <span className="font-semibold text-white">
            Headline:
          </span>{" "}
          {profile.headline}
        </p>

        <p>
          Connections:{" "}
          <span className="text-cyan-400">
            {profile.connections}
          </span>
        </p>

        <p>
          Profile Views:{" "}
          <span className="text-cyan-400">
            {profile.profileViews}
          </span>
        </p>

        <p>
          Recruiter Searches:{" "}
          <span className="text-cyan-400">
            {profile.recruiterSearches}
          </span>
        </p>
      </div>
    </div>
  );
}